<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    use HasFactory;

    protected $fillable = [
        'writer_id',
        'category_id',
        'title',
        'autor',
        'doi',
        'description',
        'publication_data',
        'cover',
        'doc',
        'page_number',
        'type',
        'status',
    ];
    
    /*
    // Relação com Writer
    public function writer()
    {
        return $this->belongsTo(Writer::class);
    }

    */
    
    // Relação com Category
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
