export default function ForgotPwd({ setUiState }) {
    return (
        <>
        <button 
            style={{ 
                border: 'none',
                background: "transparent",
                fontWeight: "700",
                padding: "0",
                margin: "0",
        }}
        onClick={() => setUiState("login")}
        >
                {'<'}
        </button>
        <label htmlFor="">Give me Your Email u goldfish</label>
        <input type="text" />
        </>
    );
}