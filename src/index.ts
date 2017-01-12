import { Building, IBuildingConfig } from './models/Building';

let cfg: IBuildingConfig = {
    floors: 10,
    elevatorNum: 3
};

let shinyNewBuilding = Building(cfg);