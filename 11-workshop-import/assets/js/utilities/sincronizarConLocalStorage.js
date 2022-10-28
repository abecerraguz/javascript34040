const sincronizarConLocalStorage = ( cursosSeleccionados ) => {
    localStorage.setItem("cursos", JSON.stringify( cursosSeleccionados ));
};

export default sincronizarConLocalStorage
