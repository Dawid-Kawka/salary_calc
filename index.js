window.onload = function () {
    ui.init();
};

// składki z pensji pracownika
class MonthlyEmployeeIncome {

}

const monthlyIncome = new MonthlyEmployeeIncome();

// składki pracodawcy
class MonthlyEmployerCost {

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
    }
}

const ui = new Ui();