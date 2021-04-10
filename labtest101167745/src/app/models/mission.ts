export class mission {
  constructor(
    public mission_name: string,
    public launch_year: string,
    public details: string,
    public links: nested,
    public flight_number: Number,
    public rocket_type: nested2,
    public launch_site: object,
    public wikipedia: string,
    public video_link: string,

  ){}
}
export class nested {
  constructor(
    public mission_patch_small: string,
  ){}
}

export class nested2 {
  constructor(
    public rocket_type: string,
  ){}
}
