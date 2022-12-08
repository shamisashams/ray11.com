<?php

namespace App\Models\Translations;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeambTranslation extends BaseTranslationModel
{
    use HasFactory;
     protected $table = 'teamb_translations';

    protected $fillable = [
         'name',
         'surname',
        'position'

    ];
}
