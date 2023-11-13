const { Schema,model } = require('mongoose');

const PedidoSchema = Schema({
    productos:{
        type:Array,
        require:true
    },
    total:{
        type:Number,
        require:true
    },
    tienda:{
        type:String,
        require:true
    },
    repartidor:{
        type:Schema.Types.ObjectId,
        require:false,
        ref:'Usuario'
    },
    imagen:{
        type:String,
        require:true
    },
    confirmado:{
        type:Boolean,
        require:true
    },
    proceso_iniciado:{
        type:Boolean,
        require:true
    },
    proceso_finalizado:{
        type:Boolean,
        require:true
    },
    codigo_cliente:{
        type:String,
        require:true
    },
    entregado_repartidor:{
        type:Boolean,
        require:true
    },
    entregado_cliente:{
        type:Boolean,
        require:true
    },
    direccion_cliente:{
        type:Object,
        require:true
    },
    direccion_negocio:{
        type:Object,
        require:true
    },
    punto_venta:{
        type:String,
        require:true
    },
    usuario:{
        type:Object,
        require:true
    },
    efectivo:{
        type:Boolean,
        require:true
    },
    tiempo_espera:{
        type:Number,
        require:true
    },
    confirmacion_tiempo:{
        type:Date,
        require:false
    },
    entrega_repartidor_tiempo:{
        type:Date,
        require:false
    },
    entrega_cliente_tiempo:{
        type:Date,
        require:false
    },
    codigo_repartidor:{
        type:String,
        require:true
    },
    id_venta:{
        type:Schema.Types.ObjectId,
        require:true
    },
    repartidor_domicilio:{
        type:Boolean,
        require:true
    },
    repartidor_domicilio_tiempo:{
        type:Date,
        require:true
    },
    repartidor_calificado:{
        type:Boolean,
        require:true
    },
    repartidor_calificado_tiempo:{
        type:Date,
        require:true
    },
    envio:{
        type:Number,
        require:true
    },
    ruta:{
        type:Object,
        require:true
    },
    apartado:{
        type:Boolean,
        require:false
    },
    liquidado:{
        type:Boolean,
        require:false
    },
    abonos:{
        type:Array,
        require:false
    },
    total_safe:{
        type:Number,
        require:false
    },
    concepto_titulo:{
        type:String,
        require:false
    }
    
},{
    timestamps:true
});


PedidoSchema.method('toJson',function(){
    const{__v,id,...object }= this.toObject();
    return object;
});

module.exports = model('Pedidos',PedidoSchema);