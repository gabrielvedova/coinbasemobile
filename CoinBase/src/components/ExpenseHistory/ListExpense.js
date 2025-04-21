import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import expenses from "../../data/Expenses.json";

export default ({ filterOption }) => {
  const navigation = useNavigation();

  const filterDate = (useFilter) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Zera as horas para comparar apenas a data
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1); // Define a data de ontem

    if (useFilter === 0) {
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - today.getDay() - 7); // Domingo da semana atual ou anterior
      startOfWeek.setHours(0, 0, 0, 0);

      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6); // Sábado da mesma semana
      endOfWeek.setHours(23, 59, 59, 999);

      // Retorna as despesas da semana
      return expenses.filter((expense) => {
        const expenseDate = new Date(expense.date + "T00:00:00"); // Converte o formato yyyy-mm-dd para Date
        return expenseDate >= startOfWeek && expenseDate <= endOfWeek;
      });
    } else if (useFilter === 1) {
      // Hoje
      return expenses.filter((expense) => {
        const expenseDate = new Date(expense.date + "T00:00:00"); // Converte o formato yyyy-mm-dd para Date
        return expenseDate.getTime() === today.getTime();
      });
    } else if (useFilter === 2) {
      // Ontem
      return expenses.filter((expense) => {
        const expenseDate = new Date(expense.date + "T00:00:00"); // Converte o formato yyyy-mm-dd para Date
        return expenseDate.getTime() === yesterday.getTime();
      });
    } else if (useFilter === 3) {
      // Últimas 4 semanas
      const weeks = [];
      for (let i = 0; i < 4; i++) {
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay() - i * 7); // Domingo da semana atual ou anterior
        startOfWeek.setHours(0, 0, 0, 0);

        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6); // Sábado da mesma semana
        endOfWeek.setHours(23, 59, 59, 999);

        const weekExpenses = expenses.filter((expense) => {
          const expenseDate = new Date(expense.date + "T00:00:00"); // Converte o formato yyyy-mm-dd para Date
          return expenseDate >= startOfWeek && expenseDate <= endOfWeek;
        });

        weeks.push({
          week: `${startOfWeek.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
          })} - ${endOfWeek.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
          })}`,
          expenses: weekExpenses,
        });
      }
      return weeks;
    } else if (useFilter === 4) {
      // Todos os meses do ano atual
      const months = [];
      for (let i = 0; i < 12; i++) {
        const startOfMonth = new Date(today.getFullYear(), i, 1); // Primeiro dia do mês
        const endOfMonth = new Date(today.getFullYear(), i + 1, 0); // Último dia do mês

        const monthExpenses = expenses.filter((expense) => {
          const expenseDate = new Date(expense.date); // Formato yyyy-mm-dd
          return expenseDate >= startOfMonth && expenseDate <= endOfMonth;
        });

        if (monthExpenses.length > 0) {
          months.push({
            month:
              startOfMonth
                .toLocaleString("default", {
                  month: "long",
                })
                .charAt(0)
                .toUpperCase() +
              startOfMonth
                .toLocaleString("default", { month: "long" })
                .slice(1) +
              ` ${startOfMonth.getFullYear()}`, // Adiciona o ano ao título do mês
            expenses: monthExpenses.sort(
              (a, b) => new Date(b.date) - new Date(a.date)
            ),
            startOfMonth, // Adiciona a data para ordenação
          });
        }
      }

      // Ordena os meses do mais recente para o mais antigo
      return months.sort((a, b) => b.startOfMonth - a.startOfMonth);
    }

    // Retorna todas as despesas por padrão
    return expenses;
  };

  const recentsExpenses = filterDate(filterOption).sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("ExpenseDetails", { expense: item })}
      key={item.id}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
      <Text>R${item.price}</Text>
      <Text>{item.category}</Text>
      <Text>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ width: "100%", paddingHorizontal: 10 }}>
      {filterOption === 3 || filterOption === 4 ? (
        // Renderização para semanas ou meses
        recentsExpenses.map((group) => (
          <View key={group.week || group.month}>
            <Text
              style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}
            >
              {group.week || group.month}
            </Text>
            {group.expenses.map((item) => renderItem({ item }))}
          </View>
        ))
      ) : filterOption === 1 || filterOption === 2 ? (
        <>
          <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>
            {filterOption === 1 ? "Hoje" : "Ontem"}
          </Text>
          {recentsExpenses.map((item) => renderItem({ item }))}
        </>
      ) : (
        <>
          <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>
            {filterOption === 0 ? "Semana" : null}
          </Text>
          {recentsExpenses.map((item) => renderItem({ item }))}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FAFAFA",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    width: "100%",
  },
  titleRecentsExpensives: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
    marginRight: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
});
