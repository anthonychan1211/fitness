import React from 'react'

const Introduction = ({selectedTopic}) => {
  return (
    <div className={selectedTopic==='Introduction'?'intoruction-content':'hidden'}>
        <h1>This is what happens to your body when you first start working out.</h1>
        <p>
        If you’ve ever started lifting weights again after a long time off, 
        you may remember that time as a magical period where your body reacted 
        extraordinarily to the stresses put on it, and seemingly began to pile 
        on muscle like crazy. (And if you’ve never experienced this phenomenon, 
        add it to the list of reasons to reup your gym membership and proceed 
        straight to the weight rack.) Often referred to as “newbie gains,” the 
        effect is not purely psychological, experts say—there really are benefits 
        that newcomers enjoy over more seasoned gym rats.<br/><br/>

        The reason isn’t that you’ve actually piled on a ton of muscle mass in the 
        two days since your first workout. Even in the newbie gains period, lean 
        mass accumulates incrementally, Hanson says. Your early strength gains are 
        due to an improvement in your nervous system: “There are two components to it,” 
        Hanson says. “A neurological component that happens very, very quickly, and 
        then the actual accretion of muscle tissue, which takes a little bit longer 
        to manifest itself in results you can see.” These "neuro-gains" happen almost 
        immediately, and at about the time they start to level off, you begin seeing 
        an increase in lean muscle mass that allows you to keep progressing, he says. 
        How long muscle gains last depends on the individual.<br/><br/>

        As time goes on, these exercises become less disruptive to your muscle fibers. 
        You may get still tired, you may see incremental gains, but the body by now has 
        prepared itself to handle these repeated bouts of exercise better, and be more 
        able to maintain a state closer to homeostasis even as you work out, Hanson says. 
        Instead of freaking out and responding with frantic attempts to build as much 
        muscle as it can, your muscle fibers take the workload in stride, and gains 
        become more incremental as they become used to the stresses you put on them.<br/><br/>

        If you step away from the gym for a while, though, and find that your fitness 
        level has slipped far enough away, you can relive this period of rapid growth—and 
        it could go faster the second time around, Hanson says. “Following a de-training 
        period, the ability to recoup the previous gains is actually enhanced because 
        your body has already achieved and been to that (level of fitness) before.” It’s 
        known as muscle memory, the ability for the body to reawaken its knowledge of 
        how to efficiently respond to exercise.
        </p>
        
        </div>
  )
}

export default Introduction