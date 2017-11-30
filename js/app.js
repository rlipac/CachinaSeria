$(document).foundation()


$('[data-toggle-dia]').click(function (ev){
    const panel= $(this).data('toggleDia')
    $('#lineup-tabs').foundation('selectTab', panel) /* cambia los paneles sabado y domingo y viernes*/
})

const $offCanvas = $('#offCanvas')
$offCanvas.find('li').click(function (ev){
$offCanvas.foundation('close') 
    
})

<!--   boton veta boleto -->
  
  
class Toggable {
    constructor (el) {
        // inicializar el estado  interno
        
        this.el = el
        this.el.innerHTML = 'Comprar Boleto'
        this.activated = false
        this.el.addEventListener('click', this.onClick.bind(this))
        
    }
    
    onClick(ev) {
       // acciona el botonn
        this.activated = !this.activated
        this.toggleText()
        
    }
    
    toggleText ()  {
        // cambia el texto on : off
    this.el.innerHTML = this.activated ? 'Vendido' : 'Comprar Boleto'
        
    }
    
}

const button = document.getElementById('boton')// captura el valor del Id
const miBoton = new Toggable(button)// otorga nuevo valor del Id


<!--   boton veta boleto -->