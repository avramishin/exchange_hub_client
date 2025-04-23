export declare class SpotAccountTransaction {
    account_transaction_id: string;
    type: string;
    transaction_class: string;
    currency_id: string;
    account_id: string;
    user_id: string;
    amount: number;
    post_balance: number;
    comment?: string;
    created_at: string;
    created_by?: string;
    parent_transaction_id?: string;
    client_transaction_id?: string;
    margin_trade_id?: string;
    payment_id?: string;
    order_id?: string;
    trade_id?: string;
    conversion_id?: string;
}
