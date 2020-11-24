export interface ExchangeValue {
  casa: Casa;
}

export interface Casa {
  compra: string;
  venta: string;
  agencia: string;
  nombre: string;
  variacion?: string;
  ventaCero?: string;
  decimales?: string;
  mejor_compra?: string;
  mejor_venta?: string;
  fecha?: string;
  recorrido?: string;
  afluencia?: Afluencia;
  observaciones?: Afluencia;
}

interface Afluencia {
}

export interface Divisa{
   buy: any,
   sell: string
}
