export class CertificationsModel {
  constructor(
    public requestId: number,
    public userId: 3,
    public userName: string,
    public certificationTitle: string,
    public categoryId: number,
    public quarter: number,
    public categoryName: string,
    public status: string,
    public price: number,
    public businessJustification: string
  ) {}
}
