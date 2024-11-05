$(document).ready(function() {
    // Adiciona evento de submit ao formulário
    $("#task-form").submit(function(e) {
        e.preventDefault(); // Impede o comportamento padrão do formulário

        // Obtém o valor do campo de entrada
        const taskText = $("#task-input").val();

        // Cria um novo elemento <li>
        const newTask = $("<li>" + taskText + "</li>");

        // Adiciona o novo elemento à lista
        $("#task-list").append(newTask);

        // Limpa o campo de entrada
        $("#task-input").val("");

        // Adiciona evento de clique ao novo item da lista
        newTask.click(function() {
            $(this).toggleClass("completed");
        });
    });
});
