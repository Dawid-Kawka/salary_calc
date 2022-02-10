window.onload = function () {
    ui.init();
};

// składki z pensji pracownika
class MonthlyEmployeeIncome {
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

    calculate(grossAmount, monthNum, accumulatedYearlyIncomeSum) {

    }
}

const monthlyIncome = new MonthlyEmployeeIncome();

// składki pracodawcy
class MonthlyEmployerCost {
    calculate(grossAmount, monthNum, accumulatedYearlyIncomeSum) {

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
        this.salaryGross = e.target.value;
        if (!this.salaryGross || isNaN(this.salaryGross)) this.salaryGross = 0;
        console.log(this.salaryGross);

        monthlyIncome.calculate(this.salaryGross, 1, 0);
        monthlyEmplyerCost.calculate(this.salaryGross, 1, 0);

        this.updateDom();
    }

    updateDom = () => {

    }
}

const ui = new Ui();