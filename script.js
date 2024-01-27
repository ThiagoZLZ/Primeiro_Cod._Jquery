$(document).ready(function(){
    let linhas = '';
    const aviso = $('h4');
    const tarefa = [];
    
    $('#lista').on('submit', function(evento){
        evento.preventDefault();
        
            const inputTarefa = $('#novaTarefa');
        
            if(tarefa.includes(inputTarefa.val())){
               aviso.html('Esse tarefa já foi cadastrada!');
               inputTarefa.val('')
            }else{
                aviso.html('');
                tarefa.push((inputTarefa.val()));
                
        
               let linha = `<ul>`;
               linha += `<li>${inputTarefa.val()}</li>`;
               linha += `</ul>`;
        
                linhas += linha;
        
                const corpoTabela = $('tbody');
                corpoTabela.html(linhas);
        
                const tarefaConcluida = document.querySelectorAll('li');
                tarefaConcluida.forEach((li) =>{
                    li.addEventListener('click', () => {
                        li.classList.add('tarefaFeita');
                    });
                }); 
                
                inputTarefa.val('')
        
            }      
    });

});
        
            