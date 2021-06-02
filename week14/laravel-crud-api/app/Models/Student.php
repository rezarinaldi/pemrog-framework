<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = [
        "first_name", "last_name", "full_name", "email", "phone"
    ];
}
