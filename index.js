window.onload = function () {
    ui.init();
};

// składki z pensji pracownika
class MonthlyEmployeeIncome {
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