Creare una griglia in cui renderizzare gli utenti dall'api JSON placeholder (https://jsonplaceholder.typicode.com/users). 
 
Specifiche: 
 
- Mostrare le colonne: Name, Email, Phone, City, Street 
- Abilitare un column chooser per selezionare le colonne che si vogliono vedere in schermata 
- Realizzare un pulsante esterno alla tabella che se cliccato mostra/nasconde la stessa 
 
Di seguito attività di 1 livello: 
 
- Realizzare una piccola form sopra alla griglia per poter aggiungere nuovi elementi. (La form dovrà contenere come campi tutti quelli esposti come colonne: Name, Email, Phone, City, Street) 
- Introdurre un filtro per nome e uno per city 
 
Di seguito attività opzionali di 2 livello: 
 
- Creare una toolbar custom e introdurre un pulsante refresh per effettuare la GET dei dati con un debounce (optional redux-saga) 
- Sulla toolbar custom aggiungere un pulsante che rimuove solo le righe dispari 
- Implementare una paginazione per avere un massimo di 5 record per vista 
- In fase di retrieve dati, la toolbar custom si dovrebbe vedere ma la parte delle collonne e le righe dovrebbero scomparire e far apparire un loader 
 
Di seguito attività opzionali di 3 livello: 
 
- Abilitare l’editing inline sulla riga 
- Aggiungere un bottone su ogni record che se clickato o dbclicked, apre una nuova pagina che presenti le informazioni dell'utente in sola visualizzazione su campi di una form, non all'interno di tag div o span
