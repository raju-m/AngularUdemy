export class CounterService {
  private inActiveCount: number=0;
  private activeCount: number=0;

  countActive() {}
  
  countActiveToInActive() {
    this.inActiveCount++;
  }
  countInaActiveToActive() {
    this.activeCount++;
  }

  getActiveToInActive() {
    return this.inActiveCount;
  }
  getInaActiveToActive() {
    return this.activeCount;
  }
}
