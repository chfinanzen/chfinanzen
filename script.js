// BMI-Rechner Funktion
function berechneBMI() {
    let gewicht = parseFloat(document.getElementById('gewicht').value);
    let groesse = parseFloat(document.getElementById('groesse').value);
    
    if (!gewicht || !groesse) {
        document.getElementById('bmi-resultat').textContent = 'Bitte gültige Werte eingeben.';
        return;
    }

    let bmi = gewicht / (groesse * groesse);
    document.getElementById('bmi-resultat').textContent = 'Dein BMI ist: ' + bmi.toFixed(2);
}

// Steuerrechner Funktion
function berechneSteuer() {
    let einkommen = parseFloat(document.getElementById('einkommen').value);

    if (!einkommen || einkommen <= 0) {
        document.getElementById('steuer-resultat').textContent = 'Bitte ein gültiges Einkommen eingeben.';
        return;
    }

    let steuer = 0;
    let restbetrag = einkommen;

    const steuerStufen = [
        { prozent: 0, betrag: 6900, steuerBisHier: 0 },
        { prozent: 2, betrag: 4900, steuerBisHier: 98 },
        { prozent: 3, betrag: 4800, steuerBisHier: 144 },
        { prozent: 4, betrag: 7900, steuerBisHier: 316 },
        { prozent: 5, betrag: 9600, steuerBisHier: 480 },
        { prozent: 6, betrag: 11000, steuerBisHier: 660 },
        { prozent: 7, betrag: 12900, steuerBisHier: 903 },
        { prozent: 8, betrag: 17400, steuerBisHier: 1392 },
        { prozent: 9, betrag: 33600, steuerBisHier: 3024 },
        { prozent: 10, betrag: 33200, steuerBisHier: 3320 },
        { prozent: 11, betrag: 52700, steuerBisHier: 5797 },
        { prozent: 12, betrag: 68400, steuerBisHier: 8208 },
        { prozent: 13, betrag: 1, steuerBisHier: 0.13 }
    ];

    for (let i = 0; i < steuerStufen.length; i++) {
        const stufe = steuerStufen[i];
        const naechsteStufe = steuerStufen[i + 1];

        if (restbetrag <= stufe.betrag) {
            steuer += restbetrag * (stufe.prozent / 100);
            break;
        } else {
            steuer += stufe.betrag * (stufe.prozent / 100);
            restbetrag -= stufe.betrag;
        }
    }

    document.getElementById('steuer-resultat').textContent = 'Die berechnete Steuer beträgt: CHF ' + steuer.toFixed(2);
}

// Event Listener für Enter-Taste beim BMI-Rechner
document.getElementById('gewicht').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        berechneBMI();
    }
});
document.getElementById('groesse').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        berechneBMI();
    }
});

// Event Listener für Enter-Taste beim Steuerrechner
document.getElementById('einkommen').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        berechneSteuer();
    }
});
