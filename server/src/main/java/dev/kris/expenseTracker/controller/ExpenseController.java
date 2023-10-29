package dev.kris.expenseTracker.controller;

import dev.kris.expenseTracker.model.Expense;
import dev.kris.expenseTracker.services.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/expenses")
@RestController
public class ExpenseController {

    @Autowired
    private ExpenseService expenseService;

    @PostMapping("/create")
    public Expense createExpense(@RequestBody Expense expense){
            return expenseService.createExpense(expense);
    }

    @GetMapping("/getAll")
    public List<Expense> getAllExpenses(){
        return expenseService.getAllExpenses();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable Long id){
        boolean deleted = false;
        deleted = expenseService.deleteEmployee(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }
}
