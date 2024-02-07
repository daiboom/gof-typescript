import Row from './Row'

export default class DBMS {
  private db = new Map<string, Row>()
  constructor() {
    this.db.set('jane', new Row('jane', '1990-01-01', 'jane@geosse.co.kr'))
    this.db.set('robert', new Row('robert', '1979-11-05', 'nice@gmail.com'))
    this.db.set('dorosh', new Row('dorosh', '1985-08-21', 'dorosh@nave.com'))
  }

  query(name: string, callback: (row: Row | undefined) => void): void {
    setTimeout(() => {
      callback(this.db.get(name))
    }, 1500)
  }
}
