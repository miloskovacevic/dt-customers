export class SessionCacheHelper {

    static setGridData(name: String, data: any) {
        localStorage.setItem(name + '.GridData', JSON.stringify(data));
    }
    static getGridData(name: String) {
        return JSON.parse(localStorage.getItem(name + '.GridData'));
    }
}
