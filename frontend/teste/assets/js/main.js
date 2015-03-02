var cart = (function(){
    var $holder = $('#shopping-cart'),
        $input_qty = $holder.find('.input-quantity'),
        $btn_refresh = $holder.find('.refresh'),
        $btn_remove = $holder.find('.remove'),
        $btn_cep = $('#btn-cep'),
        $shipping = $('#frete'),
        $subtotal = $('#sub-total'),
        $total = $('#final-total');

    var sub_total = 0,
        new_total = 0,
        total = 0,
        shipping_total = 0;   

    var isInt = function(value) {
            return !isNaN(value) && 
             parseInt(Number(value)) == value && 
             !isNaN(parseInt(value, 10));
        },
        update_total = function() {
            sub_total = parseFloat($subtotal.text());
            shipping = parseFloat($shipping.text());

            new_total = sub_total + shipping;
            $total.text(new_total.toFixed(2));
        },
        sum_shipping = function() {
            $current = $(this);

            shipping_rate = parseFloat($current.data('frete'));
            qty = parseInt($current.parentsUntil('tbody').find('.input-quantity').val(), 10);            

            if(isNaN(qty)) {
                alert("O campo quantidade deve ser um número inteiro.");
                return false;
            }            

            shipping_total += shipping_rate * qty // Adicionei essa linha por conta própria, depende da regra de negócio.           
            
        },
        update_shipping = function() {
            // $.get na API passando o cep para recalcular o valor total do carrinho
            shipping_total = 0; 

            if($('#input-cep').val() == '') {
                alert("Preencha o CEP.");
                return false;
            }
            $values = $('#shopping-cart tbody .price');            
            $values.each(sum_shipping); 
            $shipping.text(shipping_total.toFixed(2));  

            update_total();
        },
        sum_subtotal = function() {
            $current = $(this);
            item_value = parseFloat($current.text());            
            
            sub_total += item_value;            
        },
        update_subtotal = function(e) { 
            sub_total = 0;

            $shipping.text("0.00"); // atualizar o subtotal zera o frete para forçar recalcular o frete
            $values = $('td.total .valor');            

            $values.each(sum_subtotal);            

            $subtotal.text(sub_total.toFixed(2)); 

            update_total();           
        },
        remove = function() {
            // $.post na API passando o ID do produto para remove-lo do carrinho
            // retornando o valor a ser preenchido no subtotal.
            // Para o teste apenas removo o item da tela

            $(this).remove();
            update_subtotal();
        },
        remove_item = function(e) {
            e.preventDefault();
            
            $current = $(e.target);            
            $target = $current.parentsUntil('tbody');

            $target.fadeOut('fast', remove);
        },
        update_item = function(e) {
            e.preventDefault();
            
            $current = $(e.target).parentsUntil('tbody').find('.input-quantity');            
            $target = $current.parentsUntil('tbody').find(".total .valor");
            
            price = parseFloat($current.parentsUntil('tbody').find('.price .valor').text());
            qty = parseInt($current.val(), 10);
            new_total = price * qty;
            
            if(isNaN(qty)) {
                alert("O campo quantidade deve ser um número.");
                return false;
            }
            
            $target.text(new_total.toFixed(2)); 

            update_subtotal();  
        },
        binds = function() {            
            $btn_refresh.on('click', update_item);
            $btn_remove.on('click', remove_item);            
            $btn_cep.on('click', update_shipping);

            //$input_qty.on('change', update_item).trigger('change');
            //atualizar sem precisar do botao refresh, porem precisa de mais retorno visual para nao ficar confuso para o usuário.
        },
        init = function(e) {
            binds();
        };

        return {
            init: init
        };
})()