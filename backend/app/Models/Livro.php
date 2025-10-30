<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Livro extends Model
{
    use HasFactory;

    protected $fillable = [
        'titulo',
        'autor',
        'categoria',
        'capa_path',
        'arquivo_path',
        'data_publicacao',
        'status',
    ];
}
