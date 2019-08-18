let corBranca = '#fff';

const AppStyle = {
    body: {
        backgroundColor: '#616161',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '15%',
        alignItems: 'center'
    },
    img: {
        width: '80%',
    },
    h1: {
        fontSize: '16px',
        color: corBranca,
    },
    form: {
        flexDirection: 'column',
        display: 'flex',
        margin: '10%'    
    },
    input:{
        borderRadius: 3,
        border: 'none',     
        padding: '3%' ,
        marginTop: '5%',
        width:'92%'        
    },
    selecao:{
        flexDirection: 'column',
        display: 'flex', 
        margin: '0 10%'
    },
    botao:{
        display: 'flex',
        justifyContent: 'center',
    },
    btn1:{
        border:'none',
        width:'35%',
        height:'30%',
        borderRadius: '20px 0 0 20px',
        padding: '5%',
        backgroundColor:corBranca,
    },
    btn2:{
        border:'none',
        borderRadius: '0 20px 20px 0',
        width:'35%',
        marginLeft: 1,
        padding: '5%',
        backgroundColor:corBranca,
    },
    marginTop:{
        marginTop:'5%'
    },
    label:{
        color: corBranca,
    },
    p: {
        color: corBranca,
        alignItems: 'center',
        margin:'5% 10% 0'  
    },

}

export default AppStyle
