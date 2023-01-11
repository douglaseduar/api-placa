const puppeteer = require('puppeteer');
  
  
  async function pesquisa_placa(placa) {
    let placaaux = placa.toUpperCase();
    var regex = '[A-Z]{3}[0-9][0-9A-Z][0-9]{2}';
    try {
    if (placaaux.match(regex)) {
      const browser = await puppeteer.launch({
        headless: true
      });
      const page = await browser.newPage();
      await page.setUserAgent('Mozilla/5.0 (Windows NT 5.1; rv:5.0) Gecko/20100101 Firefox/5.0');
      await page.setViewport({
        width: 1280,
        height: 1800
      })
      await page.goto("https://www.tabelafipebrasil.com/placa/" + placa);
      const resultado = await page.evaluate(() => {
        let rmarca = document.querySelectorAll("td")[1].textContent;
        let rmodelo = document.querySelectorAll("td")[3].textContent;
        let rAnoModelo = document.querySelectorAll("td")[5].textContent;
        let rcor = document.querySelectorAll("td")[9].textContent;
        let rcilindradas = document.querySelectorAll("td")[11].textContent;
        let rpotencia = document.querySelectorAll("td")[13].textContent;
        let rCombustivel = document.querySelectorAll("td")[15].textContent;
        if(rCombustivel.slice(0, 4) === "****") {
          let rCombustivel1 = document.querySelectorAll("td")[13].textContent;
          let rcilindradas1 = document.querySelectorAll("td")[9].textContent;
          let rpotencia1 = document.querySelectorAll("td")[11].textContent;
          let rcor1 = document.querySelectorAll("td")[7].textContent;

          var campos = {
            "marca": rmarca,
            "modelo": rmodelo,
            "AnoModelo": rAnoModelo,
            "cor": rcor1,
            "cilindradas": rcilindradas1,
            "potencia": rpotencia1,
            "Combustivel": rCombustivel1
          };
    
          return campos;
        }else if(rcor.slice(0, 4) === "****"){
          let rCombustivel2 = document.querySelectorAll("td")[7].textContent;
          let rcor2 = "N/A";
          let rcilindradas2 = "N/A";
          let rpotencia2 = "N/A";

          var campos = {
            "marca": rmarca,
            "modelo": rmodelo,
            "AnoModelo": rAnoModelo,
            "cor": rcor2,
            "cilindradas": rcilindradas2,
            "potencia": rpotencia2,
            "Combustivel": rCombustivel2
          };
    
          return campos;

        }else if(!isNaN(rcor)){
          let rcilindradas3 = "N/A";
          let rcor3 = document.querySelectorAll("td")[9].textContent;

          var campos = {
            "marca": rmarca,
            "modelo": rmodelo,
            "AnoModelo": rAnoModelo,
            "cor": rcor3,
            "cilindradas": rcilindradas3,
            "potencia": rpotencia,
            "Combustivel": rCombustivel
          };
    
          return campos;

        }else{

          var campos = {
            "marca": rmarca,
            "modelo": rmodelo,
            "AnoModelo": rAnoModelo,
            "cor": rcor,
            "cilindradas": rcilindradas,
            "potencia": rpotencia,
            "Combustivel": rCombustivel
          };
    
          return campos;
        }

  
      });
      await browser.close();
      return resultado;
    } else {
      var campos = {
        "marca": "---",
        "modelo": "---",
        "AnoModelo": "---",
        "cor": "---",
        "cilindradas": "---",
        "potencia": "---",
        "Combustivel": "---"
      };
  
      return campos;
    }
  } catch (error){
    var campos = {
      "marca": "---",
      "modelo": "---",
      "AnoModelo": "---",
      "cor": "---",
      "cilindradas": "---",
      "potencia": "---",
      "Combustivel": "---"
    };
  
    return campos;
  }}


module.exports = {pesquisa_placa}