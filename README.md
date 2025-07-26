## Cypress

Javascipt end to end testing framework 

 #### Why Cypress
 1. Automatically waits for elements to become available
 2. Simplifies debugging by taking snapshots of test execution
 3. Saves videos and scrrenshots of test execution
 4. Contains a built-in selector playground
 5. Includes unique features because it runs directly in the browser

#### Trede offs of Cypress
- Cypress is not used to index web pages, performance testing or to script tree party sites
- Communication with back-end like server or database is limited
- There is not muilt tabs support
- Cypress does not support multiple browsers open at the same time
- Cypress test are limited to the same origin

> Cypress is not based on Selenium Webdriver

#### Links
- [Documentação oficial do metodo cy.get](https://docs.cypress.io/api/commands/get)


**Suport**
- Chrome
- Edge
- Mozilla

**Commands for Simulating User Actions**
- `click()
	- click simulates a click action on an element
- `dbclick()`
	- dbclick simulates a doble click action on an element
- `type()`
	- type enters text into an input or textarea
- `clear()`
	- clear clears the value of an input or textarea
- `focus()`, `blur()`
	- blur blurs a focused element and focus focuses an element
- `check()`
	- check checks checkboxes or radios
- `select()`
	- select selects an option of a select


<img width="701" height="602" alt="Screenshot 2025-07-26 at 14 15 59" src="https://github.com/user-attachments/assets/25228bfe-a059-4ea4-a605-153b57761f88" />
<img width="729" height="368" alt="Screenshot 2025-07-26 at 14 16 44" src="https://github.com/user-attachments/assets/1c4dbaad-22d1-4ce5-9a9e-46953d1a3ae8" />

#### Comandos


```
### Adiciona o pacote do Cypress
ng add @cypress/schematic

### Abrir o console do cypress
npx cypress open
```

####Boas práticas para encontrar elementos pelo cypress
<img width="699" height="332" alt="Screenshot 2025-07-26 at 14 17 20" src="https://github.com/user-attachments/assets/452b901e-aca5-4d0b-b0d6-7d44db2f4ccf" />

