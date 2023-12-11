const toggleGlobalLoading = (e) => {
    e === 'open'
        ? window.spin.showModal()
        : window.spin.close()
}

export default toggleGlobalLoading