package dev.kris.expenseTracker.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.antlr.v4.runtime.misc.NotNull;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class Expense {
    private long id;
    private String category;
    private String description;
    private int amount;
//    private LocalDate dateCreated = LocalDate.now();
//    private LocalDate dateModified = LocalDate.now();

}
