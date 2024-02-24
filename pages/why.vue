<template>
  <div class="why">
    <Intro v-once :title="title" :sub-title="description" />

    <p>
      Mixing Science and Politics has always been a weird concept: one strives towards objectivity while the other
      strives towards subjectivity. One relies on facts where the other is based on a set of personal views and
      preferences.
      We also all know stories of corruption, of greed, of abuse of power, of lack of responsibility, of lack of
      independence&hellip;
    </p>

    <br>

    <p>
      We all picture clearly companies who think they can do whatever they want, and scientists that just comply
      or give in.
      We all know people who act irrationally, erratically, or who think rules, regulations and laws don't apply
      to them.
      People who don't think about consequences, morals, ethics or deontology.
    </p>

    <br>

    <p>
      People have complained about "Big Pharma" or "Big Tech" companies for ages. Arguing that they might hold too
      much power over individuals, or that they might act too erratically and without concern for reason.
      Most of these people were mocked, caricatured, ridiculed. Some have been taken seriously.
    </p>

    <br>

    <p>
      In early 2022, Russia invaded Ukraine. Among the first "counter measures": tech companies sanctioning an
      entire population of their own volition, with no care or discernment about whose life they may impact.
      On forums, developers around the world were asking for tips on how to restrict access on their websites in
      order to exclude Russian visitors. Not for protective measures against potential cyber&zwj;-&zwj;attacks, but to
      prevent anyone from Russia to visit their website.
    </p>

    <br>

    <p>
      This was the final nail in the coffin for me. It truly highlighted how fragile the deontology (if there
      was ever any) of the Tech World truly is. It was a demonstration of how immature and god&zwj;-&zwj;complex&zwj;-&zwj;striken
      the current Tech World is. "Activism" that had more collateral damage than actual impact for the most part.
      I thought it was unfair that we even had the opportunity to have the power to do these things, without
      any kind of supervision or obstacles.
    </p>

    <br>

    <p>
      I've always been fascinated by the Hippocratic Oath that physicians are obligated to take. I've also been
      amazed
      at how almost no other field (scientific or not) has such concepts in place. As Scientists, we help shape
      the understanding of our world for future generations. We may have a great power over others but we,
      more often than not, uphold to none of the responsibilities that come with it.
    </p>

    <br>

    <p>
      It's that simple realization that drove me to create The Scientist's Oath: an Oath that all Scientists
      who respect their field, and value the importance of their work, should take. Physicians shouldn't be
      the only one held accountable for their actions.
    </p>

    <br>

    <p>
      No Scientist should have to betray their purpose by being forced to work against the laws of humanity.
      Scientists shouldn't make weapons or be weapons. Scientists should help understand the world around us,
      and help us deal with it. We shouldn't make swords, we should help build shields.
    </p>

    <br>

    <p>
      Although I may be the one that created the Oath, I sincerely hope it transcends my own personal ideals
      and helps shape the future. A future in which everyone can live without fear of conflicts and issues
      that plagued our past.
    </p>
  </div>
</template>

<script setup lang="ts">
const title = "Why";
const description = "The origin of the oath";

useHead({
	title,
	meta: [{
		name: "description",
		content: description
	}]
});
</script>
