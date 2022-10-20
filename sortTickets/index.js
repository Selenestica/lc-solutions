const { discover_the_train_tickets } = require("./helpers");

function sort_tickets(the_evidence) {
    /* 
      Code your sorting function here and return the sorted tickets.
      By default it returns the unsorted stack.
    */
    const the_goods = the_evidence;

    let destinations = [];
    let froms = [];
    let initial = "";
    let sortedTickets = [];

    for (let i = 0; i < the_goods.length; i++) {
        froms.push(the_goods[i].from);
        destinations.push(the_goods[i].to);
    }

    // finds initial city
    for (let j = 0; j < froms.length; j++) {
        if (!destinations.includes(froms[j])) {
            sortedTickets.push(froms[j]);
            initial = the_goods[j];
        }
    }
    console.log(initial);

    // sorts the tickets. very expensive. try to figure this out without for loop
    let currentTicket = initial;
    while (the_evidence.length !== sortedTickets.length) {
        for (let k = 0; k < the_evidence.length; k++) {
            if (the_evidence[k].from === currentTicket.to) {
                currentTicket = the_evidence[k];
                sortedTickets.push(the_evidence[k]);
            }
        }
    }
    console.log(
        "###",
        sortedTickets,
        sortedTickets[sortedTickets.length - 1].to
    );

    return the_goods;
}

/* 
  This variable determines the number of hops in the trip, 
  or tickets in the stack.  It can range from 2 to 50. 
*/
const ticket_count = 50;

/* 
  This is the controlling function that calls the sort function.
  By default it logs the stack return from sort function to the console.
  Make any changes you feel necessary.
*/
function crack_the_case() {
    const the_evidence = discover_the_train_tickets(ticket_count);
    const the_goods = sort_tickets(the_evidence);
    console.log(the_goods);
}

crack_the_case();
