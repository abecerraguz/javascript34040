const siSeRepite = ( idCurso, cursosAcumulados ) => {

    const existe = cursosAcumulados.some( curso => curso._id === idCurso )
    // CON OPERADOR TERNARIO
    let siExiste = existe ? true : false
    // console.log('===========================================')
    // console.log('existe--->', existe )
    // console.log('siExiste--->', siExiste )
    // console.log('idCurso--->', idCurso )
    // console.log('cursosAcumulados--->', cursosAcumulados )
    // console.log('===========================================')
    // if(existe){
    //     return true
    // }
    return siExiste
}
export default siSeRepite