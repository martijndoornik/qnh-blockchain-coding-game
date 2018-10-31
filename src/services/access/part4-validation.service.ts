import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Part2ValidationService } from './part2-validation.service';
import { Part3ValidationService } from './part3-validation.service';
import { Web3Service } from '@services/web3.service';
import { RouteService } from '@services/route.service';

@Injectable()
export class Part4ValidationService implements CanActivate {

  constructor(
    private _part2ValidationService: Part2ValidationService,
    private _part3ValidationService: Part3ValidationService,
    private _routeService: RouteService,
    private _web3Service: Web3Service
  ) { }

  // @ts-ignore
  public canActivate(redirectOnFalse: boolean = true): boolean {
    const canActivate = this._part2ValidationService.partComplete && this._part3ValidationService.partComplete;
    if (!canActivate && redirectOnFalse) {
      this._routeService.navigateToPart1();
    }
    return canActivate;
  }
}
