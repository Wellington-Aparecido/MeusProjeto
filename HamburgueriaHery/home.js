const btnPedir = document.querySelectorAll('.btn-pedir');

btnPedir.forEach((btn) => {
  btn.addEventListener('click', () => {
    const pedido = btn.getAttribute('data-pedido');
    enviarPedido(pedido);
  });
});

function enviarPedido(pedido) {
  // Código para enviar a mensagem para a lanchonete
  console.log(`Pedido enviado: ${pedido}`);
  //  código para enviar uma mensagem via WhatsApp
   window.open(`https://wa.me/5516997521019?text=Pedido: ${pedido}`);
}
