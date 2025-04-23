export declare class SpotOpenOrder {
    order_id: string;
    user_id: string;
    instrument_id: string;
    instrument_strategy_id?: string;
    parent_order_id?: string;
    type: string;
    side: string;
    status: string;
    price?: number;
    stop_price?: number;
    quantity_mode: string;
    quantity: number;
    executed_quantity: number;
    remaining_quantity: number;
}
