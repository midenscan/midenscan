pub fn convert_option_u64_to_bigdecimal(opt: Option<u64>) -> Option<sqlx::types::BigDecimal> {
    opt.map(|val| sqlx::types::BigDecimal::from(val))
}
