package dev.kris.expenseTracker.repositories;

import dev.kris.expenseTracker.entities.ExpenseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpenseRepository extends JpaRepository <ExpenseEntity, Long> {
}
