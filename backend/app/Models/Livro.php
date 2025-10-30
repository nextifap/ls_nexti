<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Livro extends Model
{
    use HasFactory;

    protected $fillable = [
        'link_amazon',
        'titulo',
        'autor',
        'doi',
        'numero_paginas',
        'categorias',
        'descricao',
        'tipo_documento',
        'visibilidade',
        'capa_path',
        'arquivo_path',
        'data_publicacao',
        'status',
    ];
}