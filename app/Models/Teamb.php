<?php

namespace App\Models;

use App\Models\Translations\TeambTranslation;
use Kalnoy\Nestedset\NodeTrait;
use App\Models\Translations\StaffTranslation;
use App\Models\Translations\TeamTranslation;
use App\Traits\ScopeFilter;
use App\Models\File;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Teamb extends Model
{
    use Translatable, HasFactory, ScopeFilter;
    protected $table = 'teamb';
    protected $fillable = [
        'status',
        'pos',
        'company'
    ];

    protected $translationModel = TeambTranslation::class;

    public $translatedAttributes = [
        'name',
        'surname',
        'position',

    ];

    public function getFilterScopes(): array
    {
        return [
            'id' => [
                'hasParam' => true,
                'scopeMethod' => 'id'
            ],
            'status' => [
                'hasParam' => true,
                'scopeMethod' => 'status'
            ],
            'title' => [
                'hasParam' => true,
                'scopeMethod' => 'titleTranslation'
            ],
            'category_id' => [
                'hasParam' => true,
                'scopeMethod' => 'categoryId'
            ]
        ];
    }


    public function files(): MorphMany
    {
        return $this->morphMany(File::class, 'fileable');
    }


    // this adds image
    public function latestImage()
    {
        return $this->morphOne(File::class, 'fileable')->latestOfMany();
    }


}
