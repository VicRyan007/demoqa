class SortablePage {
    sortList() {
        const order = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
        order.forEach((value, index) => {
            const targetPosition = `:nth-child(${index + 1})`;
            cy.get('.vertical-list-container')
                .find(`.list-group-item:contains(${value})`)
                .then((element) => {
                    cy.get(`.vertical-list-container > ${targetPosition}`).then((target) => {
                        if (element[0] !== target[0]) {
                            cy.wrap(element).drag(`.vertical-list-container > ${targetPosition}`, { force: true });
                        }
                    });
                });
        });
    }

    sortGrid() {
        const order = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
        order.forEach((value, index) => {
            const targetPosition = `:nth-child(${index + 1})`;
            cy.get('.create-grid')
                .find(`.list-group-item:contains(${value})`)
                .then((element) => {
                    cy.get(`.create-grid > ${targetPosition}`).then((target) => {
                        if (element[0] !== target[0]) {
                            cy.wrap(element).drag(`.create-grid > ${targetPosition}`, { force: true });
                        }
                    });
                });
        });
    }
}

export default new SortablePage();
