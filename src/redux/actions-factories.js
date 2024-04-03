import CounterActionsFactory from "./actions/factories/counter-actions-factory";
import type BaseFactory from "./actions/factories/base-factory";
import {DefaultFactory} from "./actions/factories/base-factory";
import KdsActionsFactory from "./actions/factories/kds-actions-factory";

export default class ActionsFactories{
    static getActionFactory(factoryName):BaseFactory
    {
        switch(factoryName)
        {
            case CounterActionsFactory.factoryName:
                return new CounterActionsFactory();
            case KdsActionsFactory.factoryName:
                return new KdsActionsFactory();
            default:
                return new DefaultFactory()
        }
    }
}