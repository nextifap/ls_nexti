<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
//Para poder usar factory
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Material extends Model
{
    use HasFactory;

    //No protected $fillable vai ter todos os dados que vir do formulário
    protected $fillable = [
        'writer',
        'category',
        'title',
        'doi',
        'description',
        'publication_data',
        'cover',
        'doc',
        'page_number',
        'type',
        'status',
    ];

    //Quando o laravel lê algo do banco de dados ele trata tudo como se fosse string. Então onde a gente vai precisar de algum tratamento ou mexer com dados que não sejam string, tem que fazer esse processo de transformar
    protected $casts = [
        'publication_data' => 'date',
        'page_number' => 'integer',
    ];

}
