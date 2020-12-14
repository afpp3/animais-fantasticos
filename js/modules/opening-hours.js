export default class OpeningHours {
  constructor(businessHours) {
    this.businessHours = document.querySelector(businessHours);
    this.activeClass = 'aberto';
  }

  getOpeningHoursData() {
    this.weekDays = this.businessHours.dataset.semana.split(',').map(Number);
    this.weekTime = this.businessHours.dataset.horario.split(',').map(Number);
  }

  getDateNow() {
    this.dateNow = new Date();
    this.dayNow = this.dateNow.getDate();
    this.timeNow = this.dateNow.getUTCHours() - 3;
  }

  isOpen() {
    const openWeek = this.weekDays.indexOf(this.dayNow) !== -1;
    const openTime =
      this.timeNow >= this.weekTime[0] && this.timeNow < this.weekTime[1];

    return openWeek && openTime;
  }

  activeOpen() {
    if (this.isOpen()) {
      this.businessHours.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.businessHours) {
      this.getOpeningHoursData();
      this.getDateNow();
      this.activeOpen();
    }
    return this;
  }
}
