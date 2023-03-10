<?php

/**
 *  app/Repositories/Eloquent/ProductRepository.php
 *
 * Date-Time: 30.07.21
 * Time: 10:36
 * @author Vakho Batsikadze <vakhobatsikadze@gmail.com>
 */

namespace App\Repositories\Eloquent;


use App\Models\File;
use App\Models\Page;
use App\Models\Staff;
use App\Models\Team;
use App\Models\Teamb;
use App\Models\Vacancy;
use App\Repositories\Eloquent\Base\BaseRepository;
use App\Repositories\PageRepositoryInterface;
use App\Repositories\StaffRepositoryInterface;
use App\Repositories\VacancyRepositoryInterface;
use Illuminate\Database\Eloquent\Model;
use ReflectionClass;


class TeambRepository extends BaseRepository
{

    public function __construct(Teamb $model)
    {
        parent::__construct($model);
    }
}
