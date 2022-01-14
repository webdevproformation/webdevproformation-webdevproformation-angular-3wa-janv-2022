import { AppComponent } from "./app.component"
// test unitaire

describe("mon premier test" , () => {
    it("exemple1" , () => {
        expect(1).toBe(1)
    })
    it("tester getTitle du composant AppComponent" , () => {
        const titre = (new AppComponent()).getTitle()
        expect(titre).toBe("jour5-tp");
        // expect(titre).toBe("joury5-tp"); echec du test 
        // assertion => affirmation
        // matcher => vérificateur 
        // jasmine 
        // https://jasmine.github.io/
        // https://jasmine.github.io/api/4.0/matchers.html 
        expect(titre).toContain("tp"); 
    })

    it("tester customTitre du composant AppComponent" , () => {
        const titre = (new AppComponent()).customTitre("bonjour")
        //expect(titre).toBe("jour5-tp");
        expect(titre).toContain("tp");
    })

    it("test calcul si param positif ", () =>{
        const resultat = (new AppComponent()).calcul(1)
        expect(resultat).toBe(1);
        expect(resultat).toEqual(1);
    })

    it("test calcul si param négatif ", () =>{
        const resultat = (new AppComponent()).calcul(-1)
        expect(resultat).toBe(0);
        expect(resultat).toEqual(0);
    })
    
})




// ng g d / c / s / p / g  
// toto.component.ts
// toto.component.spec.ts