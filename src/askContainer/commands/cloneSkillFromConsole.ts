import {
    SmapiResource, AbstractCommand, CommandContext
} from '../../runtime';
 
import { SkillInfo } from '../../models/types';
import { CloneHostedSkill } from '../../utils/cloneSkillHelper/cloneHostedSkill';
import { Logger } from '../../logger';
import { CloneOtherSkill } from '../../utils/cloneSkillHelper/cloneOtherSkill';
 
export class CloneSkillFromConsoleCommand extends AbstractCommand<void> {
    constructor() {
        super('askContainer.skillsConsole.cloneSkillFromConsole');
    }
 
    async execute(context: CommandContext, skillInfo: SmapiResource<SkillInfo>): Promise<void> {
        Logger.debug(`Calling method: ${this.commandName}, args: `, skillInfo);
        const cloneHostedSkill = new CloneOtherSkill();
        await cloneHostedSkill.executeClone(context, skillInfo);
    }
}