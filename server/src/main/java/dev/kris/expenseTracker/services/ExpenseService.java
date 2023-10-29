package dev.kris.expenseTracker.services;

import dev.kris.expenseTracker.entities.ExpenseEntity;
import dev.kris.expenseTracker.model.Expense;
import dev.kris.expenseTracker.repositories.ExpenseRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ExpenseService {
    @Autowired
    private ExpenseRepository expenseRepository;

    public Expense createExpense(Expense expense) {

        if(expense != null) {
            ExpenseEntity entity = new ExpenseEntity();
            BeanUtils.copyProperties(expense, entity);
            expenseRepository.save(entity);

            return null;
        }
        return null;
    }

    public List<Expense> getAllExpenses() {
        if(expenseRepository.count() == 0){
            return null;
        }

        List<Expense> expenses = new ArrayList<Expense>();


        expenseRepository.findAll().parallelStream().forEach(entity -> {
            Expense expense = Expense.builder()
                    .id(entity.getId())
                    .amount(entity.getAmount())
                    .category(entity.getCategory())
                    .description(entity.getDescription())
                    .build();
            expenses.add(expense);
        });
                return expenses;
    }

    public boolean deleteEmployee(Long id) {
        expenseRepository.deleteById(id);
        return expenseRepository.existsById(id);
    }
}
