window.onload = function () {
    ui.init();
    // ui.salaryChange();  // testowy
};

// składki z pensji pracownika
class MonthlyEmployeeIncome {
    grossAmount; // kwota brutto
    accumulatedYearlyIncomeSum; // zakumulowany przychód od początku roku
    monthNum;

    // Składka emerytalna - 9.76%:
    retirementContribution;

    // Składka rentowa - 6.5%:
    pensionContribution;

    // Składka chorobowa - 2.45%:
    sicknessContribution;

    // Suma składek na ubezpieczenie społeczne finansowane przez pracownika:
    workerSocialContributionSum;

    // Podstawa wymiaru składki na ubezpieczenie zdrowotne:
    baseForHealthContribution;

    // Składka na ubezpieczenie zdrowotne - 9%:
    healthContribution;

    // Zaliczka na podatek:
    advanceTax;

    // Składka zdrowotna według stawki - 9%:</td>
    healthAmountToEclude;

    // Kwota netto
    finalWorkerNetMoney;

    // Dochód, który jest wynikiem pomniejszenia o koszty uzyskania przychodu 250zł
    icome;

    calculate(grossAmount, monthNum, accumulatedYearlyIncomeSum) {
        if (!accumulatedYearlyIncomeSum) accumulatedYearlyIncomeSum = 0;

        this.grossAmount = grossAmount;
        this.accumulatedYearlyIncomeSum = accumulatedYearlyIncomeSum;
        this.monthNum = monthNum;

        // Składka emerytalna - 9.76%:
        this.retirementContribution = grossAmount * 0.0976;
        console.log("Składka emerytalna - 9.76%: ", this.retirementContribution);

        // Składka rentowa - 1.5%:
        this.pensionContribution = grossAmount * 0.015;
        console.log("Składka rentowa - 1.5%: ", this.pensionContribution);

        // Składka chorobowa - 2.45%:
        this.sicknessContribution = grossAmount * 0.0245;
        console.log("Składka chorobowa - 2.45%: ", this.sicknessContribution);

        // Suma składek na ubezpieczenie społeczne finansowane przez pracownika:
        this.workerSocialContributionSum = this.retirementContribution + this.pensionContribution + this.sicknessContribution;
        console.log("Suma składek na ubezpieczenie społeczne finansowane przez pracownika: ", this.workerSocialContributionSum);

        // Podstawa wymiaru składki na ubezpieczenie zdrowotne:
        this.baseForHealthContribution = grossAmount - this.workerSocialContributionSum;
        console.log("Podstawa wymiaru składki na ubezpieczenie zdrowotne: ", this.baseForHealthContribution);

        // Składka na ubezpieczenie zdrowotne - 9%:
        this.healthContribution = this.baseForHealthContribution * 0.09;
        console.log("Składka na ubezpieczenie zdrowotne - 9%: ", this.healthContribution);

        // Zaliczka na podatek:
        this.icome = Math.ceil(this.baseForHealthContribution - 250);
        console.log("Dochód: ", this.icome)

        if (accumulatedYearlyIncomeSum < 85528 && this.icome + accumulatedYearlyIncomeSum >= 85528) {
            // pierwszy miesiąc gdzie przekroczony został próg 17% do 85tyś, 32% ponad 85tyś
            this.advanceTax = this.icome * 0.17;
            console.log("Miesiąc z przekroczeniem pierwszego progu podatku 17%: ", this.advanceTax)

            const taxAbove85k = ((this.icome + accumulatedYearlyIncomeSum) - 85528) * 0.32;
            console.log("Podatek powyżej 85528: ", taxAbove85k);
            this.advanceTax += taxAbove85k;
        } else if (this.icome + accumulatedYearlyIncomeSum >= 85528) {
            this.advanceTax = this.icome * 0.32;
            console.log("Kolejny miesiąc z podatkiem 32%: ", this.advanceTax)
        } else {
            this.advanceTax = (this.icome * 0.17) - 43.76;
            console.log("Zaliczka na podatek, pierwszy próg 17%: ", this.advanceTax)
        }

        // Składka zdrowotna według stawki - 7.75%:</td>
        this.healthAmountToEclude = this.baseForHealthContribution * 0.0775;
        console.log("Składka zdrowotna według stawki - 7.75%: ", this.healthAmountToEclude);

        // ostateczna zaliczka na podatek dochodowy
        this.advanceTax = Math.floor(this.advanceTax - this.healthAmountToEclude);
        console.log("Zaliczka na podatek dochodowy, wartość końcowa: ", this.advanceTax)

        // Kwota netto
        this.finalWorkerNetMoney = grossAmount - this.workerSocialContributionSum - this.healthContribution - this.advanceTax;
        console.log("Kwota netto: ", this.finalWorkerNetMoney);
    }
}

const monthlyIncome = new MonthlyEmployeeIncome();

// składki pracodawcy
class MonthlyEmployerCost {

    grossAmount;
    accumulatedYearlyIncomeSum;
    monthNum;

    // Składka na ubezpieczenie emerytalne - 9.76%:
    employerRetirementContribution;

    // Składka na ubezpieczenie rentowe - 6.5%:
    employerPensionContribution;

    // Składka na ubezpieczenie wypadkowe - 1.67%:
    employerAccidentInsurance;

    // Składka na fundusz pracy - 2.45%:
    employerWorkFundContribution;

    // Składka na fundusz Gwarantowanych Świadczeń Pracowniczych - 0.1%:
    employerGuaranteedWorkFundContribution;

    //Suma składek pracodawcy:
    employerContributionSum;

    calculate(grossAmount, monthNum, accumulatedYearlyIncomeSum) {
        if (!accumulatedYearlyIncomeSum) accumulatedYearlyIncomeSum = 0;

        this.grossAmount = grossAmount;
        this.accumulatedYearlyIncomeSum = accumulatedYearlyIncomeSum;
        this.monthNum = monthNum;

        // Składka na ubezpieczenie emerytalne - 9.76%:
        this.employerRetirementContribution = grossAmount * 0.0976;

        // Składka na ubezpieczenie rentowe - 6.5%:
        this.employerPensionContribution = grossAmount * 0.065;

        // Składka na ubezpieczenie wypadkowe - 1.67%:
        this.employerAccidentInsurance = grossAmount * 0.0167;

        // Składka na fundusz pracy - 2.45%:
        this.employerWorkFundContribution = grossAmount * 0.0245;

        // Składka na fundusz Gwarantowanych Świadczeń Pracowniczych - 0.1%:
        this.employerGuaranteedWorkFundContribution = grossAmount * 0.001;

        //Suma składek pracodawcy:
        this.employerContributionSum = this.employerRetirementContribution
            + this.employerPensionContribution
            + this.employerAccidentInsurance
            + this.employerWorkFundContribution
            + this.employerGuaranteedWorkFundContribution;
    }
}

const monthlyEmplyerCost = new MonthlyEmployerCost();

class Ui {
    salaryInput;
    salaryGross; // kwota brutto

    init() {
        this.salaryInput = document.getElementById("salary");
        this.salaryInput.addEventListener('input', this.salaryChange);
    }

    salaryChange = (e) => {
        if (e) this.salaryGross = e.target.value;

        // this.salaryGross = 2600;  //testowy

        if (!this.salaryGross || isNaN(this.salaryGross)) this.salaryGross = 0;
        console.log(this.salaryGross);

        monthlyIncome.calculate(this.salaryGross, 1, 0);
        monthlyEmplyerCost.calculate(this.salaryGross, 1, 0);

        this.updateDom();
    }

    updateDom = () => {
        // Pracownik
        this.setValueById("retirementContribution", monthlyIncome.retirementContribution.toFixed(2));
        this.setValueById("pensionContribution", monthlyIncome.pensionContribution.toFixed(2));
        this.setValueById("sicknessContribution", monthlyIncome.sicknessContribution.toFixed(2));
        this.setValueById("workerSocialContributionSum", monthlyIncome.workerSocialContributionSum.toFixed(2));
        this.setValueById("baseForHealthContribution", monthlyIncome.baseForHealthContribution.toFixed(2));
        this.setValueById("healthContribution", monthlyIncome.healthContribution.toFixed(2));
        this.setValueById("advanceTax", monthlyIncome.advanceTax.toFixed(2));
        this.setValueById("healthAmountToEclude", monthlyIncome.healthAmountToEclude.toFixed(2));
        this.setValueById("finalWorkerNetMoney", monthlyIncome.finalWorkerNetMoney.toFixed(2));

        // Pracodawca
        this.setValueById("employerRetirementContribution", monthlyEmplyerCost.employerRetirementContribution.toFixed(2));
        this.setValueById("employerPensionContribution", monthlyEmplyerCost.employerPensionContribution.toFixed(2));
        this.setValueById("employerAccidentInsurance", monthlyEmplyerCost.employerAccidentInsurance.toFixed(2));
        this.setValueById("employerWorkFundContribution", monthlyEmplyerCost.employerWorkFundContribution.toFixed(2));
        this.setValueById("employerGuaranteedWorkFundContribution", monthlyEmplyerCost.employerGuaranteedWorkFundContribution.toFixed(2));
        this.setValueById("employerContributionSum", monthlyEmplyerCost.employerContributionSum.toFixed(2));
    }

    setValueById(id, v) {
        document.getElementById(id).innerHTML = v + "zł";
    }
}

const ui = new Ui();