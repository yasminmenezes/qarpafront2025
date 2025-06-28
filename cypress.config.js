const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const { faker } = require('@faker-js/faker');
module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());

      //Definimos nossas tasks aqui
      on("task", {
        geradorDeUser(){
          const generateCpf = () => {
            let cpf = '';
            for (let i=0; i<11; i++){
              cpf += Math.floor(Math.random() * 10);
            }
            return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
          }

          return{
            nome: faker.person.fullName(), // Usando faker.person.fullName()
            email: faker.internet.email(),
            cpf: generateCpf()
          }
        }
      })
      const version = config.env.version || 'qa'
      config.env = require(`./cypress/config/${version}.json`)
      config.baseUrl = config.env.baseUrl;
      return config;
    },
  },
});